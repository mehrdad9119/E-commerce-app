import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_eEaz0i9Nfd2uwLvUqJjVRRMz003b078AIX';

	const onToken = token => {
		alert('Payment Successful');
	}

	return(
		<StripeCheckout
			label='Pay Now'
			name='E-Commerce'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripekey={publishableKey}
		/>
	)
};

export default StripeCheckoutButton;