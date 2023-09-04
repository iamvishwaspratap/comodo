import { Typography } from 'antd';

const { Title } = Typography;

const NotFound = () => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Title
                level={1}
                style={{
                    textAlign: 'center',
                    fontSize: '200px'
                }}
            >
                {`404 :(`}
            </Title>
            <Title
                level={3}
                style={{
                    textAlign: 'center'
                }}
            >
                The page you are trying to view doesn't exists.
            </Title>

        </div>
    );
}

export default NotFound;