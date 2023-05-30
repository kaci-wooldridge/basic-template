import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import '../styles/card-page.css';

export default function CardPage() {
    return (
        <div className="container card-page-container">

            <div className="card-container">
                <Card color="light" style={{ width: '18rem', height: '100%' }} >
                    <img src="https://picsum.photos/300/200" className="card-img" />
                    <div className="card-body">
                        <CardBody>
                            <div>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>

                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Card subtitle
                                </CardSubtitle>
                            </div>

                            <div className="card-text">
                                <CardText>
                                    This is the day you will always remember as the day you almost caught Captain Jack Sparrow.
                                </CardText>
                            </div>

                            <Button className="card-button">
                                Button
                            </Button>
                        </CardBody>
                    </div>
                </Card>
            </div>

            <div className="card-container">
                <Card color="light" style={{ width: '18rem', height: '100%' }}>
                    <img src="https://picsum.photos/300/200" className="card-img" />
                    <div className="card-body">
                        <CardBody>
                            <div>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>

                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Card subtitle
                                </CardSubtitle>
                            </div>

                            <div className="card-text">
                                <CardText>
                                    The only rules that matter are these: what a man can do and what a man can't do.
                                </CardText>
                            </div>

                            <Button className="card-button">
                                Button
                            </Button>
                        </CardBody>
                    </div>
                </Card>
            </div>

            <div className="card-container">
                <Card color="light" style={{ width: '18rem', height: '100%' }}>
                    <img src="https://picsum.photos/300/200" className="card-img" />
                    <div className="card-body">
                        <CardBody>
                            <div>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>

                                <CardSubtitle className="mb-2 text-muted" tag="h6">
                                    Card subtitle
                                </CardSubtitle>
                            </div>

                            <div className="card-text">
                                <CardText>
                                    I love those moments. I like to wave at them as they pass by.
                                </CardText>
                            </div>

                            <Button className="card-button">
                                Button
                            </Button>
                        </CardBody>
                    </div>
                </Card>
            </div>

        </div>
    )
}