export default function Bill({ bill, setBill }) {

    return (
        <div className='bill'>
            <label>How much was the bill ? </label>
            <input name="BillInput" type="text" placeholder="Bill Value" value={bill} onChange={(e) => Number(setBill(e.target.value))} />
            {/* <p>How much was the bill ? <input name="BillInput" type="text" value={bill} onChange={(e) => setBill(e.target.value)} /></p> */}
        </div>

    );
}
