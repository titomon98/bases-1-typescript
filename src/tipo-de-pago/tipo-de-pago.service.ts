import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoDePagoDto } from './dto/create-tipo-de-pago.dto';
import { UpdateTipoDePagoDto } from './dto/update-tipo-de-pago.dto';
import { TipoDePago } from './entities/tipo-de-pago.entity';

@Injectable()
export class TipoDePagoService {
  constructor(
    @InjectRepository(TipoDePago)
    private readonly repo: Repository<TipoDePago>,
  ) {}

  findAll(): Promise<TipoDePago[]> {
    return this.repo.find({ where: { estado: 1 } });
  }

  async findOne(id: number): Promise<TipoDePago> {
    const record = await this.repo.findOne({
      where: { id_tipo_de_pago: id, estado: 1 },
    });
    if (!record) throw new NotFoundException(`Tipo de pago no encontrado`);
    return record;
  }

  create(dto: CreateTipoDePagoDto): Promise<TipoDePago> {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async update(id: number, dto: UpdateTipoDePagoDto): Promise<TipoDePago> {
    const record = await this.findOne(id);
    Object.assign(record, dto);
    return this.repo.save(record);
  }

  async replace(id: number, dto: CreateTipoDePagoDto): Promise<TipoDePago> {
    const record = await this.findOne(id);
    const replaced = this.repo.merge(record, {
      tipo: dto.tipo,
      proveedor: dto.proveedor,
      es_predeterminado: dto.es_predeterminado ?? false,
    });
    return this.repo.save(replaced);
  }

  async remove(id: number): Promise<{ message: string }> {
    const record = await this.findOne(id);
    record.estado = 0;
    await this.repo.save(record);
    return { message: `Tipo de pago #${id} eliminado` };
    }
}