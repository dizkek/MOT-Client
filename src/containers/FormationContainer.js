import React, { useState, useEffect } from 'react';
import BestEleven from '../components/BestEleven';
import Formation from '../components/Formation';
import AdminMenu from '../components/AdminMenu';
import { useDispatch, useSelector } from 'react-redux';
import TacticBoard from '../components/TacticBoard';
import { Switch, Route } from 'react-router-dom';
import { requestSaveFormation, requestFormationData } from '../thunks';
import { BEST_ELEVEN } from '../constants/initialData';
import { ABSOLUTE } from '../constants/style';
import { Spin } from 'antd';
import styles from './containers.module.css';

const FormationContainer = ({ match, id }) => {
  const dispatch = useDispatch();
  const [isChanging, setIsChanging] = useState(false);
  const { isLoading } = useSelector((state) => state.loading);
  const { members, admin } = useSelector((state) => state.team);
  const { user } = useSelector((state) => state);
  const { formation } = useSelector((state) => state.team);

  const [data, setData] = useState(() => {
    const obj = JSON.parse(JSON.stringify(members));
    BEST_ELEVEN.players = obj.byId;
    BEST_ELEVEN.columns['column-1'].playersIds = obj.allIds;
    return BEST_ELEVEN;
  });
 
  const onClickDisplayTactic = () => {
    if (data.columns['column-2'].playersIds.length === 11) {
      return setIsChanging(true);
    }

    alert('11명을 채우고 저장을 해야 다음단계로 넘어갑니다.');
  };

  const onClickSaveFormation = (ref, id, history) => {
    const nodes = ref.children;
    let count = 0;
    const data = Array.from(nodes)
      .map((node) => {
        const { innerText } = node;
        const { marginLeft, marginTop, cssText } = node.style;
        if ("0px" >= marginTop) count++;
        if (cssText) {
          return { innerText, marginLeft, marginTop };
        }
      })
      .filter((node) => node !== undefined);
    if (data.length !== 11 || count !== 11) {
      return alert('11명을 모두 경기장 안으로 넣어주세요!!');
    }

    setIsChanging(false);
    dispatch(requestSaveFormation(data, id, history));
  };

  useEffect(() => {
    const fetchData = async (teamId) => {
      dispatch(requestFormationData(teamId));
    };
  
    fetchData(id);
  }, []);

  if (isLoading) {
    return (
      <Spin 
        size="large" 
        style={{ position: ABSOLUTE, top: '50%', left: '50%'}} 
      />
    );
  }

  return (
    <main className={styles.MainFormation}>
      {admin === user._id && <AdminMenu match={match} isChanging={isChanging} />}
      <div className={styles.contentContainer}>
        <Switch>
          <Route
            exact
            path={`${match.path}/besteleven`}
            render={(props) => (
              !isChanging ? (
                <BestEleven 
                  {...props} 
                  data={data} 
                  setData={setData} 
                  onClickDisplayTactic={onClickDisplayTactic}
                />
              ) : (
                <TacticBoard 
                  regularIds={data.columns['column-2'].playersIds}
                  allPlayers={data.players}
                  onClickSaveFormation={onClickSaveFormation}
                  id={id}
                />
              )
            )}
          >
          </Route>
          <Route
            path={match.path}
            render={(props) => <Formation {...props} formation={formation}/>}
          >
          </Route>
        </Switch>
      </div>
    </main>   
  );
};

export default FormationContainer;
