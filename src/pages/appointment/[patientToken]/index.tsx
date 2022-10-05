import { useRouter } from 'next/router';
import React from 'react'


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const patientToken = params?.patientToken || '';
    // const { data } = api.get(`/url/${patientToken}`);


    return {
        props: {
            // patient: data
        }
    }
}


const AppointmentPatientPage = () => {

    return (
        <div>AppointmentPatientPage</div>
    )
}

export default AppointmentPatientPage;
