import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { messages } from '../../helpers/calendar-messages-es';
import { AddNewFab } from '../ui/AddNewFab';
import { uiOpenModal } from '../../actions/ui';

const localizer = momentLocalizer(moment)
moment.locale('es');
const Calendario = () => {

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


    return (
        <div>
            <Calendar
                localizer={localizer}
                // events={myEventsList}
                startAccessor="start"
                endAccessor="end"
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