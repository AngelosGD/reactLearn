const firtsName = 'angels';
const lastName = 'mejia';

const juegos =['forrnite','gd', 'metro']

const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'abasolo'
};

export function MyAwesomeApp() {




    return (
        <>
            <h1>{firtsName}</h1>
            <h3>{lastName}</h3>

            <p>{juegos.join(',')}</p>


            <h1>{isActive ? 'activoxndsadas' : ':,vv'}</h1>

            <p style={{
                backgroundColor: 'red',
                borderRadius: 10,
                padding: 10
            }}>{JSON.stringify(address)}</p>

        </>
    )
}