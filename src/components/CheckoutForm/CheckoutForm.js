import { useState } from "react";
import './CheckoutForm.css';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email
        };
        onConfirm(userData);
    };

    return (
        <div className='container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                    <input
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>

                <label className='Label'>
                    Teléfono
                    <input
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>

                <label className='Label'>
                   <div>Email</div>
                    <input
                        className='Input'
                        type='email'
                        placeholder="Ingrese su email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
               
                <label className='Label'>
                   <div>Confirmar Email</div>
                    <input
                        className='Input'
                        type='email'
                        placeholder="Ingrese su email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>

                <button type="submit" class="btn btn-light">
                    Crear orden
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
