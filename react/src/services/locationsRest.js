import axios from 'axios';

const ROOT_URL = "https://code-challenge-api.club-os.com/api/locations";

export function getAll() {
  return axios.get(ROOT_URL);
}

export function getMemberCheckins(id) {
  return axios.get(`${ROOT_URL}/${id}/member-checkins`);
}

export function getMemberAgreements(id) {
  return axios.get(`${ROOT_URL}/${id}/member-agreements`);
}
