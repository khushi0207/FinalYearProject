import React from 'react'
import { shopContext } from '../context/shopContext'
import { useContext,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
const verify = () => {

    const {navigate,token,setCartItem,backendURL} = useContext(shopContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')
    console.log(token)
    
    const verifyPayment = async () => {
        if (!token || !orderId || success === null) return;
        try {
            
            const response = await axios.post(backendURL+'/api/order/verifyStripe',{success,orderId},{headers:{token}})
            if(response.data.success){
                toast.success('Payment verified successfully!')
                setCartItem({})
                navigate('/orders')

            }else{
                toast.error('Payment verification failed!');
                navigate('/cart')
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

    useEffect(() => {
        if (token) {
          verifyPayment();
        }
      }, [token]); // only run when token is ready
      

  return (
    <div className="text-center mt-20 text-lg font-medium">
      Verifying payment... please wait 💳✨
    </div>
  )
}

export default verify
