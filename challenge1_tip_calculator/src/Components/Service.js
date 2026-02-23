export default function Service({ message, children }) {
    return (
        <div className='service'>
            <p>
                {message}
                {children}
            </p>
        </div>
    );
}
