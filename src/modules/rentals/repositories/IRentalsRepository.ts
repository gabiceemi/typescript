import { ICreateRentalDTO } from "../dtos/ICreateRentalDTO";
import { Rental } from "../infra/typeorm/entities/Rental";

interface IRentalsRepository {
    create({ user_id, car_id, expected_return_date }: ICreateRentalDTO): Promise<Rental>;
    findOpenRentalByCar(car_id): Promise<Rental>;
    findOpenRentalByUser(user_id): Promise<Rental>;
}

export { IRentalsRepository }