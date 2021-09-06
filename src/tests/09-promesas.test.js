import { getHeroeByIdAsync } from "../base/09-promesas";
import heroes from "../data/heroes";

describe('prueba promesas', () => {
    test('should return heroe async', async (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then((heroe)=>{
            expect(heroe).toBe(heroes[0]);
            done();
        });
    })

    test('should return error if the hero doesnt exist', (done) => {
        const id = 10;
        getHeroeByIdAsync(id).catch((error)=>{
            expect(error).toBe('No se pudo encontrar el heroe');
            done();
        });
    })
    
    
})
