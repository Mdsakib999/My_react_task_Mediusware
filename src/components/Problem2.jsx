import React, { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Problem2 = (props) => {
    const [data1, setData1] = useState({})
    const [secondData, setSecondData] = useState({})
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/country-contacts/united%20states/',)
            .then(res => res.json())
            .then(data => setData1(data))
    }, [])
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/',)
            .then(res => res.json())
            .then(data => setSecondData(data))
    }, [])
    
    console.log(data1?.results?.map(item => item?.phone))
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const onOpenModal = () => {
        setOpen(true)
        if(open1) {
            setOpen1(false)
        }
    };
    const onOpenModal1 = () => {
        setOpen1(true)
        if(open) {
            setOpen(false)
        }
    };
    const onCloseModal = () => setOpen(false);
    const onCloseModal1 = () => setOpen1(false);
    return (
        <>
            <Modal open={open} onClose={onCloseModal} center >
                <h2>All Contacts</h2>
                <div>
                    {
                        secondData?.results?.map(item => <p>{item?.phone}</p>)
                    }
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={onOpenModal1} >US Contacts</button>
                </div>
            </Modal>
            <Modal open={open1} onClose={onCloseModal1} center>
                <h2>All USA Contact</h2>
                <div>
                    {
                        data1?.results?.map(item => <p>{item?.phone}</p>)
                    }
                </div>
                <button className="btn btn-lg btn-outline-primary" type="button" onClick={onOpenModal} >All Contacts</button>
            </Modal>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-lg btn-outline-primary" type="button" onClick={onOpenModal} >All Contacts</button>
                        <button className="btn btn-lg btn-outline-primary" type="button" onClick={onOpenModal1} >US Contacts</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Problem2;