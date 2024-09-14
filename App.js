import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { EventProvider } from './context/EventContext';
import Auth from './components/Auth';
import EventList from './components/EventList';
import EventForm from './components/EventForm';

function App() {
    return (
        <AuthProvider>
            <EventProvider>
                <Router>
                    <div className="App">
                        <Switch>
                            <Route path="/login" component={Auth} />
                            <Route path="/events" component={EventList} />
                            <Route path="/create-event" component={EventForm} />
                        </Switch>
                    </div>
                </Router>
            </EventProvider>
        </AuthProvider>
    );
}

export default App;
