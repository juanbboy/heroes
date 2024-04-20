import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { messages } from '../../helpers/calendar-messages-es';
import { AddNewFab } from '../ui/AddNewFab';
import { uiOpenModal } from '../../actions/ui';
import { Data } from "../../data/heroes";

const localizer = momentLocalizer(moment)
moment.locale('es');


const Calendario = () => {
    // const data = Data()
    // const [myEventsList, setmyEventsList] = useState()

    // const dataa = async () => {
    //     await data.then((res) => setmyEventsList(res.find(hero => hero.id === "DP390N")))
    // }



    const myEventsList = [

        {
            // id: 'askdjhaksdjas',
            title: 'Cumpleaños del jefe',
            fecha_creacion: moment().toDate(),
            fecha_entrega: moment().add(2, 'hours').toDate(),
            notes: 'Comprar el pastel',
            user: {
                _id: '123',
                name: 'Fernando'
            }
        }

    ]

    // useEffect(() => {

    //     dataa()
    // }, [])





    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth);

    const onDoubleClick = (e) => {
        // console.log(e);
        dispatch(uiOpenModal());
    }

    // const onSelectEvent = (e) => {
    //     dispatch(eventSetActive(e));
    // }

    // const onViewChange = (e) => {
    //     setLastView(e);
    //     localStorage.setItem('lastView', e);
    // }

    // const onSelectSlot = (e) => {
    //     // console.log(e)
    //     dispatch(eventClearActiveEvent());
    // }


    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: (uid === event.user._id) ? '#367CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    };

    console.log(myEventsList)
    return (
        <div>
            <Calendar
                // icon="fa fa-calendar"
                localizer={localizer}
                events={myEventsList}
                startAccessor="fecha_creacion"
                endAccessor="fecha_entrega"
                messages={messages}
                style={{ height: 500 }}
                // selectable={true}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
            // onSelectEvent={onSelectEvent}
            // onView={onViewChange}
            // onSelectSlot={onSelectSlot}
            />

            <AddNewFab />


        </div>


    )
}

export default Calendario