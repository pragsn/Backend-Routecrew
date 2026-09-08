const baseSelectDriver=selectDriver;
selectDriver=function(id){
  baseSelectDriver(id);
  if(!selected)return;
  const set=(elementId,value)=>document.querySelector('#'+elementId).textContent=value||'—';
  set('vehicleModelDisplay',[selected.vehicleMake,selected.vehicleModel,selected.vehicleYear].filter(Boolean).join(' · '));
  set('fuelTypeDisplay',selected.fuelType);
  set('insuranceExpiryDisplay',selected.insuranceExpiry?new Date(`${selected.insuranceExpiry}T00:00:00`).toLocaleDateString():'—');
  set('homeLocationDisplay',selected.homeLocation?.lat&&selected.homeLocation?.lng?`${selected.homeLocation.lat}, ${selected.homeLocation.lng}`:'Not captured');
  set('referralDisplay',selected.referralCode||'Not referred');
  document.querySelector('#engagementDisplay').textContent=selected.engagement?`${selected.engagement.vendor||selected.engagement.company} · ${selected.engagement.location||'Location not provided'} · ${timeLabel(selected.engagement.start)}–${timeLabel(selected.engagement.end)}`:'No existing company or vendor engagement declared.';
  document.querySelector('#vehicleCheck').textContent=selected.vehicle&&selected.vehicleMake&&selected.insuranceExpiry?'Ready to verify':'Details incomplete';
  document.querySelector('#identityCheck').textContent=selected.name&&selected.dob?'Ready to verify':'Details incomplete';
  document.querySelector('#availabilityCheck').textContent=selected.morningTime||selected.eveningTime?'Captured':'Not provided';
};
