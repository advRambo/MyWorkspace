import { useState } from "react";
import Bill from "./Bill";
import Output from "./Output";
import Reset from "./Reset";
import Service from "./Service";

export default function TipCalculator() {
    const [billInput, setBillInput] = useState('');
    const [service, setService] = useState(0);
    const [friend, setFriend] = useState(0);

    const tip = (service + friend) / 2;

    const totalAmount = Number(billInput) + tip;

    // console.log(service, typeof (service), friend, typeof (friend));
    // console.log(`Sum Value : ${sum} ${typeof (sum)}`)
    // console.log(tip)
    const handleReset = () => {
        setBillInput('');
        setService(0);
        setFriend(0);
    };
    return (
        <div className="tipCalculator">
            <Bill bill={billInput} setBill={setBillInput} />
            <Service message="How did you like the service ? &nbsp;">
                <select value={service} onChange={(e) => setService(Number(e.target.value))} name="Service">
                    <option value="0"> Dissatisfied (0%)</option>
                    <option value="5"> It was okay (5%)</option>
                    <option value="10"> It was good (10%)</option>
                    <option value="20"> Absolutely amazing (20%)</option>
                </select>
            </Service>

            <Service message="How did your friend like the service ? &nbsp;">
                <select value={friend} onChange={(e) => setFriend(Number(e.target.value))} name="Friend Service">
                    <option value="0"> Dissatisfied (0%)</option>
                    <option value="5"> It was okay (5%)</option>
                    <option value="10"> It was good (10%)</option>
                    <option value="20"> Absolutely amazing (20%)</option>
                </select>
            </Service>

            <Output bill={billInput} tip={tip} amount={totalAmount} />
            {
                billInput > 0 &&
                <Reset onReset={handleReset} />
            }
        </div>);
}
