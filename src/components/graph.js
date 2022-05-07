import React, { useRef, useEffect, useState } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import tailwindColors from 'tailwindcss/colors';
import { forceX, forceY } from 'd3';

const Graph = ({ nodes, links, colors, width, height }) => {
    const ref = useRef();

    const [displayWidth] = useState(width || window.innerWidth);
    const [displayHeight] = useState(height || window.innerHeight);

    let hoverNode;

    useEffect(() => {
        links.forEach((link) => {
            const a = nodes.find((node) => node.id === link.source);
            const b = nodes.find((node) => node.id === link.target);

            if (a && !a?.neighbors) a.neighbors = [];
            if (b && !b?.neighbors) b.neighbors = [];

            a?.neighbors.push(b);
            b?.neighbors.push(a);

            if (a && !a?.links) a.links = [];
            if (b && !b?.links) b.links = [];

            a?.links.push(link);
            b?.links.push(link);
        });
    }, []);

    useEffect(() => {
        if (!ref.current) return;

        ref.current.d3Force('x', forceX());
        ref.current.d3Force('y', forceY());
        ref.current.d3Force('link').distance(70);
        ref.current.d3Force('center', null);
        ref.current.d3Force('charge').strength(-100);

        setTimeout(() => ref.current.zoomToFit(200, 20));
    }, []);

    const [highlightNodes, setHighlightNodes] = useState(new Set());
    const [highlightLinks, setHighlightLinks] = useState(new Set());

    const handleNodeHover = (node) => {
        highlightNodes.clear();
        highlightLinks.clear();

        hoverNode = node;

        if (node) {
            highlightNodes.add(node);
            (node.neighbors || []).forEach((neighbor) => highlightNodes.add(neighbor));
            (node.links || []).forEach((link) => highlightLinks.add(link));
        }

        setHighlightNodes(highlightNodes);
        setHighlightLinks(highlightLinks);
    };

    const hexToRgb = (hex, opacity = '0.2') => {
        const [, r, g, b] = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${opacity})`;
    };

    return (
        <ForceGraph2D
            ref={ref}
            graphData={{ links, nodes }}
            width={displayWidth - 1}
            height={displayHeight - 1}
            style={{ maxWidth: '100%', height: 'auto' }}
            nodeColor={(node) => {
                if (hoverNode) {
                    const hoverNodeNeighbors = (hoverNode.neighbors || []).map(({ id }) => id);

                    if (node !== hoverNode && !hoverNodeNeighbors.includes(node.id)) {
                        return hexToRgb(colors.textColor);
                    }
                }

                return highlightNodes.has(node) ? colors.selectedColor : colors.defaultColor;
            }}
            linkColor={(link) => (highlightLinks.has(link) ? colors.selectedColor : colors.defaultColor)}
            nodeCanvasObjectMode={() => 'after'}
            onNodeHover={handleNodeHover}
            onNodeDrag={handleNodeHover}
            onNodeDragEnd={() => {
                hoverNode = null;
                highlightNodes.clear();
                highlightLinks.clear();
            }}
            nodeCanvasObject={(node, ctx, globalScale) => {
                const label = node.id;
                const fontSize = 12 / globalScale;
                ctx.font = `${fontSize}px Sans-Serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = colors.textColor;
                ctx.transition = 'opacity .3s';

                if (hoverNode) {
                    const hoverNodeNeighbors = (hoverNode.neighbors || []).map(({ id }) => id);

                    if (node !== hoverNode && !hoverNodeNeighbors.includes(node.id)) {
                        ctx.fillStyle = hexToRgb(colors.textColor);
                    }
                }

                ctx.fillText(label, node.x, node.y + 8);
            }}
        />
    );
};

Graph.defaultProps = {
    links: [],
    nodes: [],
    colors: {
        selectedColor: tailwindColors.cyan['500'],
        defaultColor: tailwindColors.gray['500'],
        textColor: tailwindColors.gray['800'],
    },
};

export default Graph;
