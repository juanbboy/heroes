import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector } from 'react-redux';
import { messages } from '../../helpers/calendar-messages-es';
import { Data } from "../../data/heroes";
import Modal from 'react-bootstrap/Modal';
import HeroCard from '../hero/HeroCard';
import Year from './Year';
import './styles.css'

// const localizer = momentLocalizer(moment)
// moment.locale('es');

const localizer = momentLocalizer(moment)
localizer.formats.yearHeaderFormat = 'YYYY'

const Calendario = () => {
    const data = Data()
    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () => setModalShow(false);
    const [myEventsList, setmyEventsList] = useState([])
    const [modal, setModal] = useState([])
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');


    const dataa = async () => {
        await data.then((res) => {
            setmyEventsList(res)
        })
    }

    useEffect(() => {
        dataa()
    }, [])



    // const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth);

    // const onDoubleClick = (e) => {
    //     // console.log(e);
    //     dispatch(uiOpenModal());
    // }

    const onSelectEvent = (e) => {
        setModal(e)
        console.log(e)
        setModalShow(true)

        // dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    // const onSelectSlot = (e) => {
    //     // console.log(e)
    //     dispatch(eventClearActiveEvent());
    // }


    const eventStyleGetter = (myEventsList, start, end, isSelected) => {
        const style = {
            backgroundColor: ("Entregado" === myEventsList.estado) ? '#D476F2' : ("Cancelado" === myEventsList.estado) ? '#E17B7B' : ("Aprobado" === myEventsList.estado) ? '#50E850' : '#367CF7',
            borderRadius: '15px',
            opacity: 0.7,
            display: 'block',
            color: 'white',
            // minHeight: 21,
            fontSize: 14,
            // textAlign: "center"
            padding: "0px 15px",
            margin: "0px"
            // border: "1px solid #000"
        }
        return {
            style
        }
    };

    if (!myEventsList) return null

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                toolbar={true}
                titleAccessor="id"
                startAccessor={(myEventsList) => { return new Date(moment(myEventsList.fecha_entrega)) }}
                endAccessor={(myEventsList) => { return new Date(moment(myEventsList.fecha_entrega).add(2, 'h')) }}
                messages={messages}
                style={{ height: 550 }}
                selectable={true}
                eventPropGetter={eventStyleGetter}
                // onDoubleClickEvent={() => setModalShow(true)}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                // onSelectSlot={onSelectSlot}
                showAllEvents={true}
                view={lastView}
                views={{
                    agenda: true,
                    week: true,
                    month: true,
                    year: Year
                }}
            />

            <div >
                <Modal
                    show={modalShow}
                    onHide={handleClose}
                    // size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered

                >
                    <Modal.Header closeButton>
                        {/* <Modal.Title id="contained-modal-title-vcenter">
                            {Modal.tipo}
                        </Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                        <HeroCard key={modal.id}{...modal} />
                    </Modal.Body>

                    {/* <Modal.Footer>
                        <Button onClick={handleClose}>Close</Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        </div>

    )
}

export default Calendario