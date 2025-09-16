import { Modal, ModalOverlay, ModalContent, ModalHeading, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, RadioGroup, Radio, ModalFooter, Button, Flex } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalStateContext';
import { type } from '@testing-library/user-event/dist/type';

export default function TransactionForm({ onClose, isOpen }) {
    const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext);

    const handleInputField = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (name === 'type') {
            setValue(value);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Input Data:', formData);
        // console.log('Radio Data:', value);
        handleFormSubmit(formData);
    };
    return (
        <div style={{
            maxWidth: '400px',
            margin: '0 auto',
            paddingTop: '5px',
            border: '1px solid gray',
            borderRadius: '5px',
            background: 'gray',
            height: '300px',
            boxShadow: '2px 4px 4px #d3e866',
        }}>
            <h2>Transaction Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Transaction description */}
                <div style={{ marginBottom: '10px' }}>
                    <label>Enter Description:</label>
                    <input
                        type="text"
                        name='description'
                        placeholder='Enter Transaction description'
                        value={formData.description}
                        onChange={handleInputField}
                        required
                    />
                </div>

                {/* Transaction amount */}
                <div style={{ marginBottom: '10px' }}>
                    <label>Enter Amount:</label>
                    <input
                        type="number"
                        name='amount'
                        placeholder='Enter Transaction amount'
                        value={formData.amount}
                        onChange={handleInputField}
                        required
                    />
                </div>

                {/* Radio Buttons */}
                <div style={{ marginBottom: '10px' }}>
                    <label>Transaction Type:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="income"
                                checked={formData.type === 'income'}
                                onChange={handleInputField}
                            />
                            Income
                        </label>

                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="radio"
                                name="type"
                                value="expense"
                                checked={formData.type === 'expense'}
                                onChange={handleInputField}
                            />
                            Expense
                        </label>
                    </div>
                </div>

                {/* Submit Button */}

                {/* <button onClick={onClose} style={{
                    padding: '6px 10px',
                    background: 'red',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginRight: '5px'
                }}>
                    Cancel
                </button> */}
                <button style={{
                    padding: '6px 10px',
                    background: 'green',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginRight: '5px'
                }}>
                    Add
                </button>
            </form>
        </div>
    );
}


//     return (
//         <diV>

//             <h1>This is Transation Page</h1>
//             <Flex color={'red.300'}>
//                 There is CHAKRA Version error !
//             </Flex>
//         </diV>
//         <Modal isOpen={isOpen} onClose={onClose}>
//             <form>
//                 <ModalOverlay>
//                     <ModalContent>
//                         <ModalHeading>
//                             Add New Transaction
//                         </ModalHeading>
//                         <ModalCloseButton />
//                         <ModalBody>
//                             <FormControl>
//                                 <FormLabel>
//                                     Enter Description
//                                 </FormLabel>
//                                 <Input
//                                     placeholder='Enter Transaction description'
//                                     name='description'
//                                     type='text'
//                                 />
//                             </FormControl>
//                             <FormControl>
//                                 <FormLabel>
//                                     Enter Amount
//                                 </FormLabel>
//                                 <Input
//                                     placeholder='Enter Transaction amount'
//                                     name='amount'
//                                     type='number'
//                                 />
//                             </FormControl>
//                             <RadioGroup mt={'5'}>
//                                 <Radio
//                                     value="income"
//                                     colorScheme="blue"
//                                     name="type"
//                                 >
//                                     Income
//                                 </Radio>
//                                 <Radio
//                                     value="expense"
//                                     colorScheme="red"
//                                     name="type"
//                                 >
//                                     Expense
//                                 </Radio>
//                             </RadioGroup>
//                         </ModalBody>
//                         <ModalFooter>
//                             <Button onClick={onClose} mr={'4'}>Cancel</Button>
//                             <Button>Add</Button>
//                         </ModalFooter>
//                     </ModalContent>
//                 </ModalOverlay>
//             </form>
//         </Modal>
//     )
// }