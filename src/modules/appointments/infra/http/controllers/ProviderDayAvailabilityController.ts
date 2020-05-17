import { Response, Request } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, day, year } = request.body;

    const ListProviderDayAvailability = container.resolve(
      ListProviderDayAvailabilityService,
    );

    const availability = await ListProviderDayAvailability.execute({
      provider_id,
      month,
      year,
      day,
    });

    return response.json(availability);
  }
}
