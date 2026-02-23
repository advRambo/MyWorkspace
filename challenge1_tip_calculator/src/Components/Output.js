export default function Output({ bill, tip, amount }) {
    return (
        <div className="output">
            <h3>
                You pay ${amount} ({bill === null || bill === '' ? "$0 " : `$${bill}`} + ${tip} tip)
            </h3>
        </div>
    );
}
