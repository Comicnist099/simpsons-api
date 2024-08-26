import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SimpsonsService {
  private readonly simpsonsFile = path.join(__dirname, 'simpsons.json');

  getAllCharacters() {
    const data = fs.readFileSync(this.simpsonsFile, 'utf-8');
    return JSON.parse(data);
  }

  getCharacterById(id: number) {
    const data = this.getAllCharacters();
    return data.find(character => character.id === id);
  }
}
