import * as configApi from './configAPI';

export const getContacts = async () => {
  try {
    const { data } = await configApi.getAllContacts('', {});
    return data;
  } catch (error) {
    return error;
  }
};

export const postContact = async body => {
  try {
    const { data } = await configApi.postContacts('', { data: body });
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteContact = async id => {
  try {
    const { data } = await configApi.deleteContact(`/${id}`, {});
    return data;
  } catch (error) {
    return error;
  }
};
