import React from "react";
import { ImageField } from "react-admin";
import { makeStyles } from '@material-ui/core';

const main = makeStyles(theme => ({
    popupImage: {
      position: "absolute",
      opacity:"0.3",
    },
  }));

const PopupDailyGraphic = ({record, source}) => {
    const mainStyle = main();
    if (!record[source]) {
        return (
            <>
                <ImageField record={record} source="image" />
                <div style={{fontStyle: "italic", color:"grey"}} >Graphique de production énergétique quotidienne non disponible</div>
            </>
        )
    }
    const link ="https://grafana.dashboard.data-players.com/d-solo/V8DNTabVz/prats-enr-quotidien?orgId=1&theme=light&panelId="+record[source]
    return (
        <>
            <ImageField record={record} source="image" className={mainStyle.popupImage} />
            <iframe title="graph" src={link} width="100%" height="200" frameborder="0"></iframe>
            <div style={{fontStyle: "italic", color:"grey"}} >Graphique de production énergétique quotidienne</div>
        </>
    )
}


export default PopupDailyGraphic;