import { Card, Row, Col , Button, message} from 'antd';

import { PlusCircleOutlined , DoubleRightOutlined} from '@ant-design/icons';

import '../style/Content.css';

function LayoutContent() {

    const cardJourneyMessage = () => {
        message.success('Journey Notes Success!');
    }

    const cardBooksNotesMessage = () => {
        message.success('Books Notes Success');
    }

    const cardBusinessNotesMessage = () => {
        message.success('Business Notes Success');
    }
  
    const cardPlanningNotes = () => {
        message.success('Planning Notes Success');
    }


    return (
        <>
            <Row>
                <Col span={12}>
                    <Card
                        title="Journey Notes"
                        extra={<PlusCircleOutlined className="icon-style" onClick={cardJourneyMessage} />}
                        className="card-style"
                        headStyle={{ backgroundColor: 'orange' }}
                    >
                        <p>Visit Bosnia Later This Year</p>
                        <p>Visit Prag Later This Year</p>
                        <p>Visit Italy Later This Year </p>
                    </Card>
                    <Card 
                      size="small" 
                      title="Books Notes"
                      className="card-style"
                      headStyle={{backgroundColor: 'lightslategrey'}}
                      extra={<PlusCircleOutlined className="icon-style" onClick={cardBooksNotesMessage}/>}
                    >
                        <p>Anna Karenina Get From Library </p>
                        <p>Buying Run From D & R</p>
                        <p>Buying MVC From Book Shop</p>
                    </Card>
                </Col>

                <Col span={12}>
                    <Card 
                       title="Business Notes"
                       className="card-style"
                       extra={<PlusCircleOutlined className="icon-style" onClick={cardBusinessNotesMessage}/>}
                       headStyle={{backgroundColor: 'lightslategrey'}}
                    >
                        <p>Task Planning</p>
                        <p>Node Js Coding</p>
                        <p>Advanced Js Coding</p>
                        <p></p>
                    </Card>

                    <Card 
                      size="small" 
                      title="Planning Notes" 
                      className="card-style"
                      extra={<PlusCircleOutlined className="icon-style" onClick={cardPlanningNotes}/>}
                      headStyle={{ backgroundColor: 'orange' }}
                      >
                        <p>Buying Planning NoteBook </p>
                        <p>Find Planning Web App</p>
                        <p>Follow The Planning</p>
                    </Card>
                </Col>
            </Row>
            <Row>
            <Button className="page-sub-button">
               <DoubleRightOutlined />
                Go To My Notes
            </Button>
            </Row>
        </>
    )
}

export default LayoutContent;