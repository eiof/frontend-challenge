import { useMemo } from "react";
import * as locationsRest from "../services/locationsRest";
import { resolveBusiestDays } from "../util/locationStatistics";

export default function useLocationData(id) {
  return Promise.all([
    useMemo(locationsRest.getMemberCheckins(id), [id]),
    useMemo(locationsRest.getMemberAgreements(id), [id])
  ]).then((responses) => {
      return resolveBusiestDays(responses[0].data.data);
  });
}
