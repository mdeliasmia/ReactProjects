import React, { useState } from 'react';

export default function TransactionFormReact({ onClose, isOpen }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);

        // Add further validation or API calls here
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h2>Transaction Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div style={{ marginBottom: '10px' }}>
                    <label>Enter Description:</label>
                    <input
                        type="text"
                        name='description'
                        placeholder='Enter Transaction description'
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email */}
                <div style={{ marginBottom: '10px' }}>
                    <label>Enter Amount:</label>
                    <input
                        type="number"
                        name='amount'
                        placeholder='Enter Transaction amount'
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Gender Radio Buttons */}
                <div style={{ marginBottom: '10px' }}>
                    <label>Transaction Type:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="income"
                                checked={formData.type === 'income'}
                                onChange={handleChange}
                            />
                            Income
                        </label>

                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="radio"
                                name="type"
                                value="expense"
                                checked={formData.type === 'expense'}
                                onChange={handleChange}
                            />
                            Expense
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <button onClick={onClose} mr={'4'}>Cancel</button>
                <button >Add</button>
            </form>
        </div>
    );
}
