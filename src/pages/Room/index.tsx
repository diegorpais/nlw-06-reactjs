import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import logoImg from '../../assets/images/logo.svg';

import { RoomCode } from '../../components/RoomCode';

import './styles.scss';

type RoomParams = {
  id: string;
};

export function Room() {

  const params = useParams<RoomParams>();
  const roomId = params.id;


  return (
    <div id="page-room">

      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 pergunta(s)</span>
        </div>

        <form>
          <textarea
            placeholder="O que você quer perguntar?"
          />
          <div className="form-footer">
            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>

            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>

        <div className="question-list">

        </div>

      </main>

    </div>
  );
}