import NavigationReducer from '../modules/navigation.with.redux/navigation.reducer';
import SystemReducer from './system/system.reducer';
import User from './user/user.reducer';
import TerminalsReducer from './terminals/terminals.reducer';
import ScheduleReducer from './schedules/schedule.reducer';
import BookingsReducer from './bookings/booking.reducer';
import RoutesReducer from './routes/routes.reducer';
import TripsReducer from './trips/trip.reducer';
import WalletReducer from './wallets/wallet.reducer';

export const immutableRecords = [];

export const persistedList = ['user','system','wallets'];

export default {
    user: User.reducer,
    system: SystemReducer.reducer,
    terminals: TerminalsReducer.reducer,
    schedules: ScheduleReducer.reducer,
    navigation: NavigationReducer.reducer,
    bookings: BookingsReducer.reducer,
    routes: RoutesReducer.reducer,
    trips: TripsReducer.reducer,
    wallets: WalletReducer.reducer
};
