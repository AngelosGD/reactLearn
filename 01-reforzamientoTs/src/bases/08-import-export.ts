import { heroes, Owner, type Hero } from '../data/heroes.data'

const getHeroById = (id: number): Hero => {
    const hero = heroes.find((hero) => {
        return hero.id === id
    })

    if (!hero) throw new Error(`No existe el heroe con id ${id}`);

    return hero
}

export const getHeroesByOwner=(owner: Owner)=>{
    const heroesByOwner = heroes.filter(
        hero => hero.owner === owner
    )

    return heroesByOwner
}

