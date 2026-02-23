export default function Stats({ items }) {
    if (!items.length) {
        return (<p className="stats"><em>Start adding the items to your packing list</em></p>);
    }

    const numItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const packedPercent = Math.round((packedItems / numItems) * 100);
    return (
        <footer className="stats">
            {packedPercent === 100 ? (<em>You've got everything Packed, Have a safe and a fun filled journey</em>) :
                (<em> 💼 You have {numItems} items on your list and you already packed {packedItems} ({packedPercent}%)</em>)}
        </footer>
    );
}
