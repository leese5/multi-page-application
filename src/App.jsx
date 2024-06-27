import peopleData from './data/people.json';
import planetsData from './data/planets.json';
import filmsData from './data/films.json';

import {
    Link,
    NavLink,
    Outlet,
    useParams,
    useSearchParams,
    useRouteError
} from 'react-router-dom'

export function Home() {
    return (
        <>
            <p><Link to="/people">People</Link></p>
            <p><Link to="/planets">Planets</Link></p>
            <p><Link to="/films">Flims</Link></p>
        </>
    )
}

export function People() {
    return (
        <>
            <aside>
                <ul>
                    {Object.keys(peopleData).map(person => (
                        <li key={person}>
                            <NavLink to={person}>{peopleData[person].name}</NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <div><Outlet /></div>
        </>
    )
}

export function Planets() {
    return (
        <>
            <aside>
                <ul>
                    {Object.keys(planetsData).map(planet => (
                        <li key={planet}>
                            <NavLink to={planet}>{planetsData[planet].name}</NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <div><Outlet /></div>
        </>
    )
}

export function Films() {
    return (
        <>
            <aside>
                <ul>
                    {Object.keys(filmsData).map(film => (
                        <li key={film}>
                            <NavLink to={film}>{filmsData[film].title}</NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <div><Outlet /></div>
        </>
    )
}

export function Root(props) {
    const { children } = props
    return (
        <>
            
            <nav>
                <ul>
                    <li id = "title">Star Wars</li>
                    <li><NavLink to="/people">People</NavLink></li>
                    <li><NavLink to="/planets">Planets</NavLink></li>
                    <li><NavLink to="/films">Films</NavLink></li>
                </ul>
            </nav>
            <main>{children || <Outlet />}</main>
        </>
    )
}

export function PersonInfo() {
    const params = useParams()
    const [ searchParams, setSearchParams ] = useSearchParams()

    console.log("== params:", params)
    console.log("== searchParams:", searchParams)

    const personInfo = peopleData[params.personInfo]

    return (
        <>
            <h2>{personInfo.name}</h2>
            <p>Height: {personInfo.height}</p>
            <p>Mass: {personInfo.mass}</p>
            <p>Hair Color: {personInfo.hair_color}</p>
            <p>Skin Color: {personInfo.skin_color}</p>
            <p>Eye Color: {personInfo.eye_color}</p>
            <p>Birth Year: {personInfo.birth_year}</p>
            <p>Gender: {personInfo.gender}</p>
            <p>Homeworld: <Link to={personInfo.homeworld}>{personInfo.homeworld}</Link></p>
            <p>Films: {Object.keys(personInfo.films).map(film => (
                <p id = "inline" key={film}>
                    <NavLink to={personInfo.films[film]}>{personInfo.films[film]},</NavLink>
                </p>
            ))}
            </p>
        </>
    )
}

export function PlanetInfo() {
    const params = useParams()
    const [ searchParams, setSearchParams ] = useSearchParams()

    console.log("== params:", params)
    console.log("== searchParams:", searchParams)

    const planetInfo = planetsData[params.planetInfo]

    return (
        <>
            <h2>{planetInfo.name}</h2>
            <p>Rotation Period: {planetInfo.rotation_period}</p>
            <p>Oribital Period: {planetInfo.orbital_period}</p>
            <p>Diameter: {planetInfo.diameter}</p>
            <p>Climate: {planetInfo.climate}</p>
            <p>Gravity: {planetInfo.gravity}</p>
            <p>Terrain: {planetInfo.terrain}</p>
            <p>Surface Water: {planetInfo.surface_water}</p>
            <p>Population: {planetInfo.population}</p>
            <p>Residents: {Object.keys(planetInfo.residents).map(resident => (
                <p id = "inline" key={resident}>
                    <NavLink to={planetInfo.residents[resident]}>{planetInfo.residents[resident]},</NavLink>
                </p>
            ))}
            </p>
            <p>Films: {Object.keys(planetInfo.films).map(film => (
                <p id = "inline" key={film}>
                    <NavLink to={planetInfo.films[film]}>{planetInfo.films[film]},</NavLink>
                </p>
            ))}</p>
        </>
    )
}

export function FilmInfo() {
    const params = useParams()
    const [ searchParams, setSearchParams ] = useSearchParams()

    console.log("== params:", params)
    console.log("== searchParams:", searchParams)

    const filmInfo = filmsData[params.filmInfo]

    return (
        <>
            <h2>{filmInfo.title}</h2>
            <p>Episod ID: {filmInfo.episode_id}</p>
            <p>Opening Crawl: {filmInfo.opening_crawl}</p>
            <p>Director: {filmInfo.director}</p>
            <p>Producer: {filmInfo.producer}</p>
            <p>Release Date: {filmInfo.release_date}</p>
            <p>Characters: {Object.keys(filmInfo.characters).map(character => (
                <p id = "inline" key={character}>
                    <NavLink to={filmInfo.characters[character]}>{filmInfo.characters[character]},</NavLink>
                </p>
            ))}</p>
            <p>planets: {Object.keys(filmInfo.planets).map(planet => (
                <p id = "inline" key={planet}>
                    <NavLink to={filmInfo.planets[planet]}>{filmInfo.planets[planet]},</NavLink>
                </p>
            ))}</p>
        </>
    )
}

export function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    return (
        <>
            <h1>Error</h1>
            <p>{error.statusText || error.message}</p>
        </>
    )
}
