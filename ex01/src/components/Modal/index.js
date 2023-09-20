import './style.css';

function Modal({open, setOpen}) {
    return (
        <>
        {open &&
            <div className='container-modal'>
                <div className='modal'>
                    <h1>Users</h1>
                    <div className='modal-body'>
                        <span>Vinicin</span>
                        <span>Vini</span>
                        <span>Vinicius</span>
                        <span>Vinicinho</span>
                        <span>Vinicius</span>
                        <span>Vini</span>
                    </div>
                    <button onClick={() => setOpen(false)}>Close</button>
                </div>
            </div>
        }
        </>
    )
}

export default Modal;