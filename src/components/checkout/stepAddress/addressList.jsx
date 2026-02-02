import React, { useContext } from 'react';
import useStyles from './style';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '../../common/Radio';
import { AddressContext } from "../../../context/addressContext";
import { AddCookie, removeCookie } from "../../../utils/cookies";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import EditIcon from '../../../assets/icons/fontawesome/solid/pen.svg?react'

const AddressList = ({ addressList, label, setAddAddress, setUpdateAddress, onSelectAddress }) => {
    const classes = useStyles();
    const { deliveryAddress, setDeliveryAddress, setBillingAddress } = useContext(AddressContext);

    const onSetDeliveryAddress = (id, descriptor, address) => {
        return {
            id,
            name: descriptor?.name || "",
            email: descriptor?.email || "",
            phone: descriptor?.phone || "",
            location: {
                address,
            },
        };
    };

    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography className={classes.addressFormLabelTypo} variant="body">
                    {label}
                </Typography>
            </Grid>
            {
                addressList && addressList.length > 0 && addressList.map((delivery_address, ind) => {
                    const { id, descriptor, address } = delivery_address;
                    return (
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                            key={`address-ind-${ind}`}>
                            <div className={classes.selectAddressRadioContainer}>
                                <FormControlLabel
                                    className={classes.formControlLabel}
                                    onClick={() => {
                                        if (deliveryAddress?.id !== id) {
                                            setDeliveryAddress(() =>
                                                onSetDeliveryAddress(id, descriptor, address)
                                            );
                                            AddCookie(
                                                "delivery_address",
                                                JSON.stringify(
                                                    onSetDeliveryAddress(id, descriptor, address)
                                                )
                                            );
                                            setBillingAddress();
                                            removeCookie("billing_address");
                                            onSelectAddress();
                                        }
                                    }}
                                    control={<Radio checked={deliveryAddress?.id === id} />}
                                    label={
                                        <div className={classes.addressTypoContainer}>
                                            <Typography variant="body" component="div" className={classes.addressNameTypo}>
                                                {`${descriptor?.name}`}
                                            </Typography>
                                            <Typography variant="body1" component="div" className={classes.addressTypo}>
                                                {`${address?.street ? address.street : address?.door}, ${address?.city}, ${address?.state}, Pin Code: ${address?.areaCode} ${address?.country}`}
                                                <br />
                                                {`phone: ${descriptor?.phone}`}
                                            </Typography>
                                            <div className={classes.addressActionContainer}>
                                                <EditIcon
                                                    className={classes.addressActionIcon}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setUpdateAddress({
                                                            id,
                                                            name: descriptor?.name,
                                                            email: descriptor?.email,
                                                            phone: descriptor?.phone,
                                                            areaCode: address?.areaCode,
                                                            city: address?.city,
                                                            door: address?.door,
                                                            state: address?.state,
                                                            street: address?.street,
                                                            tag: address?.tag,
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                        </Grid>
                    )
                })
            }
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <div className={classes.addAddress} onClick={setAddAddress}>
                    <Typography variant="body" component="div" className={classes.addAddressTypo} color="primary.main">
                        <AddCircleOutlineRoundedIcon className={classes.addAddressIcon} />
                        Add new address
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );

};

export default AddressList;