<div>
        <h2>Confirm Your Details</h2>
        <p>
          <strong>Name:</strong> {userName}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phoneNum}
        </p>
        <p>
          <strong>Plan:</strong>
        
            {plan === "arcade" && "$9/mo"}
            {plan === "advanced" && "$12/mo"}
            {plan === "pro" && "$15/mo"}
          
        </p>
        <p>
          <strong>Add-Ons:</strong>{' '}
          {addons.onlineService && 'Online Services' && $5}
          {addons.largerStorage && 'Larger Storage' && $6}
          {addons.customize && 'customize' && $7}
        </p>
      </div>