import React from 'react';
import moment from 'moment';

function ChefSidebar(props) {
  const {
    sidebar,
    setSidebar,
    createAvailabilityModal,
    setCreateAvailabilityModal,
    createServiceModal,
    setCreateServiceModal,
    chefAvailability,
    chefServices,
    clearAvailabilityData,
    initializeUpdateAvailability,
    deleteChefServiceModal,
    setDeleteChefServiceItem,
    chefAppointments,
    cancelChefAppointment,
    blockedAvailabilities,
    unblockAvailability,
    cancelChefAppointmentItem,
    setCancelChefAppointmentItem,
    cancelChefAppointmentModal,
    setCancelChefAppointmentModal,
    unblockAvailabilityItem,
    setUnblockAvailabilityItem,
  } = props;
  return (
    <div className={` chefSidebar  ${sidebar ? 'active' : ''}`}>
      {console.log(props)}
      <button className="chefSidebarCloseBtn" onClick={() => setSidebar(false)}>
        <i className="fa fa-close" />
      </button>

      {chefAvailability && (
        <>
          <p className="head">Current Weekly Schedule</p>
          <hr
            style={{
              height: '2px',
              width: '100%',
              backgroundColor: '#ddd',
              margin: '5px 0px',
            }}
          />
          {chefAvailability.sunday && (
            <>
              <p>
                Sunday : <span>{chefAvailability.sunday.startTime}</span> -{' '}
                <span>{chefAvailability.sunday.endTime}</span>
              </p>
            </>
          )}
          {chefAvailability.monday && (
            <>
              <p>
                Monday : <span>{chefAvailability.monday.startTime}</span> -{' '}
                <span>{chefAvailability.monday.endTime}</span>
              </p>
            </>
          )}
          {chefAvailability.tuesday && (
            <>
              <p>
                Tuesday : <span>{chefAvailability.tuesday.startTime}</span> -{' '}
                <span>{chefAvailability.tuesday.endTime}</span>
              </p>
            </>
          )}
          {chefAvailability.wednesday && (
            <>
              <p>
                Wednesday : <span>{chefAvailability.wednesday.startTime}</span>{' '}
                - <span>{chefAvailability.wednesday.endTime}</span>
              </p>
            </>
          )}
          {chefAvailability.thursday && (
            <>
              <p>
                Thursday : <span>{chefAvailability.thursday.startTime}</span> -{' '}
                <span>{chefAvailability.thursday.endTime}</span>
              </p>
            </>
          )}
          {chefAvailability.friday && (
            <>
              <p>
                Friday : <span>{chefAvailability.friday.startTime}</span> -{' '}
                <span>{chefAvailability.friday.endTime}</span>
              </p>
            </>
          )}
          {chefAvailability.saturday && (
            <>
              <p>
                Saturday : <span>{chefAvailability.saturday.startTime}</span> -{' '}
                <span>{chefAvailability.saturday.endTime}</span>
              </p>
            </>
          )}
        </>
      )}
      <button
        onClick={() => {
          if (chefAvailability) {
            initializeUpdateAvailability();
          } else {
            setCreateAvailabilityModal(true);
          }
        }}
        className="ant-btn ant-btn-primary"
      >
        {chefAvailability ? 'Update Availability' : 'Create Availability'}
      </button>

      {chefServices && (
        <>
          <p className="head">
            Services &nbsp;{' '}
            <i
              className="fa fa-plus"
              style={{cursor: 'pointer'}}
              onClick={() => setCreateServiceModal(true)}
            />{' '}
          </p>
          <div className="serviceCards">
            <hr
              style={{
                height: '2px',
                width: '100%',
                backgroundColor: '#ddd',
                margin: '5px 0px',
              }}
            />
            {chefServices.map((item, index) => (
              <div className="card">
                <button onClick={() => setDeleteChefServiceItem(item)}>
                  <i className="fa fa-close" />
                </button>
                <p>{item.description && item.description}</p>
                <p>${item.rate && item.rate}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {chefAppointments && (
        <>
          <p className="head" style={{marginTop: 30}}>
            Appointments
          </p>
          <div className="appointments">
            <hr
              style={{
                height: '2px',
                width: '100%',
                backgroundColor: '#ddd',
                margin: '5px 0px',
              }}
            />
            {chefAppointments.map((item, index) => (
              <div className="singleAppointment">
                <div className="btnGrp">
                  <button>
                    <i className="fe fe-edit" />
                  </button>{' '}
                  <button
                    onClick={() => {
                      setCancelChefAppointmentItem(item);
                      setCancelChefAppointmentModal(true);
                    }}
                  >
                    <i className="fa fa-close" />
                  </button>
                </div>

                <p>
                  With {item.user && item.user.firstName && item.user.firstName}{' '}
                  {item.user && item.user.lastName && item.user.lastName}
                </p>
                <h5>
                  {item.appointmentDate &&
                    moment(item.appointmentDate).format('DD-MMM-YYYY')}{' '}
                  ({' '}
                  {item.startTime &&
                    moment(item.startTime, 'HH:mm').format('HH:mm A')}{' '}
                  -{' '}
                  {item.endTime &&
                    moment(item.endTime, 'HH:mm').format('HH:mm A')}{' '}
                  )
                </h5>
                {/* <h5></h5> */}
              </div>
            ))}
            {chefAppointments.length == 0 && <p>No Appointments Found</p>}
          </div>
        </>
      )}
      {blockedAvailabilities && (
        <>
          <p className="head" style={{marginTop: 30}}>
            Blocked Timings
          </p>
          <div className="appointments">
            <hr
              style={{
                height: '2px',
                width: '100%',
                backgroundColor: '#ddd',
                margin: '5px 0px',
              }}
            />
            {blockedAvailabilities.map((item, index) => (
              <div className="singleAppointment">
                <div className="btnGrp">
                  {/* <button>
                    <i className="fe fe-edit" />
                  </button>{' '} */}
                  <button onClick={() => {
                    setUnblockAvailabilityItem(item)
                    // unblockAvailability(item)
                    }}>
                    <i className="fa fa-close" />
                  </button>
                </div>

                <h5>
                  {item.blockDate &&
                    moment(item.blockDate).format('DD-MMM-YYYY')}{' '}
                  ({' '}
                  {item.startTime &&
                    moment(item.startTime, 'HH:mm').format('HH:mm A')}{' '}
                  -{' '}
                  {item.endTime &&
                    moment(item.endTime, 'HH:mm').format('HH:mm A')}{' '}
                  )
                </h5>
                {/* <h5></h5> */}
              </div>
            ))}
            {blockedAvailabilities.length == 0 && <p>No Blocked Timings</p>}
          </div>
        </>
      )}
    </div>
  );
}

export default ChefSidebar;
