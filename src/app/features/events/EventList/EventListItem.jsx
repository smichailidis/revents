import React, { Component } from 'react';
import {Segment, Item, Icon, List, Button} from 'semantic-ui-react';
import EventListAtendee from './EventListAtendee';

class EventListItem extends Component {
    render() {
        const {event, selectEvent, deleteEvent} = this.props;
        return (
            <Segment.Group>
            <Segment>
                <Item.Group>
                <Item>
                    <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                    <Item.Content>
                    <Item.Header>{event.title}</Item.Header>
                    <Item.Description>
                        Hosted by {event.title}
                    </Item.Description>
                    </Item.Content>
                </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                <Icon name="clock" /> {event.date} |
                <Icon name="marker" /> {event.vanue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees && event.attendees.map(attendee => (
                        <EventListAtendee key={attendee.id} attendee={attendee}/>
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <span>{event.description}</span>
                <Button onClick={() => deleteEvent(event.id)}  as="a" color="red" floated="right" content="Delete" />
                <Button onClick={() => selectEvent(event)}  as="a" color="teal" floated="right" content="View" />
            </Segment>
            </Segment.Group>
        )
    }
}
export default EventListItem;