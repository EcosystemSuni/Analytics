import { Avatar } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";
import { toChecksumAddress } from "web3-utils";
import { useMemo } from "react";

const isAddress = (value) => {
  try {
      return toChecksumAddress(value)
  } catch {
      return false
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(2),
    // background: "transparent",
    color: theme.palette.text.secondary,
  },
}));

export default function TokenIcon({ id, ...rest }) {
  
  const classes = useStyles();
  const src = useMemo(
    () =>
      `https://raw.githubusercontent.com/Sunicoin/assets/master/blockchains/ethereum/assets/${isAddress(
        id
      )}/logo.png`,
    [id]
  );
  return <Avatar classes={{ root: classes.root }} src={src} {...rest} />;
}
