import React from 'react';

const Table = ({ columns, rows }) => (
    <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
            <tr>
                {columns.map((column) => (
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">{column}</th>
                ))}
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
            {rows.map((row) => (
                <tr>
                    {row.map((cell) => (
                        <td className="py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">{cell}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

Table.defaultProps = {
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 1', 'Cell 2', 'Cell 3'],
    ],
};

export default Table;
