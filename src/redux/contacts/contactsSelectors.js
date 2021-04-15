import { createSelector} from 'reselect';

const getItems = state => state.items;
const getFilter = state => state.filter;
const getLoading = state => state.loading;
const getError = state => state.error;

const getCheckedName = state => data => {
    const contacts = getItems(state);

    return contacts?.find(
       (el) => el.name.toLowerCase() === data.name.toLowerCase(),
      );
}
const getFilterdContacts = createSelector(
    [getFilter, getItems],
    (filter, contacts) => {
         const normolizedFilter = filter?.toLocaleLowerCase();
        return contacts?.filter((contact) => contact.name.toLowerCase().includes(normolizedFilter))
    }
) 

export default {
    getItems, getFilter, getLoading, getError,
    getCheckedName, getFilterdContacts
}
