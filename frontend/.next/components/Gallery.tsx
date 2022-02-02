
interface GalleryProps {
    name: string;
    index: any;
}

const appliancesData = [
    {
        name: 'Cuisinier',
        ref: '287317923H',
        place: 'Genève',
        appliance_date: '08/08/2021',
        agency: 'Genève'
    },
    {
        name: 'Charpentier',
        ref: 'ZERAZECDI',
        place: 'Lausanne',
        appliance_date: '10/09/2021',
        agency: 'Lausanne'
    },
    {
        name: 'Pêcheur',
        ref: '231244534F',
        place: 'Bienne',
        appliance_date: '12/10/2021',
        agency: 'Bienne'
    },
    {
        name: 'Soudeur',
        ref: 'ER42342GT',
        place: 'Genève',
        appliance_date: '08/08/2021',
        agency: 'Genève'
    }
];

const Gallery = () => {
    return (
        <div className="border">
            {appliancesData.map(
                ({ name, ref, place, appliance_date, agency }) => (
            <div key={ref}>
                <p>Métier :{name}</p>
                <p>Lieu :{place}</p>
                <p>Date :{appliance_date}</p>
                <p>Agence :{agency}</p>
            </div>
            ))}
        </div>
    )
}

export default Gallery;
