/*
  RouteCrew verification schema compatibility layer.
  The main verification screen now natively understands the current
  driver onboarding schema (shifts, engagements, homeLocation, consent,
  vehicleOwnership and licenceNumber). Keep this file as the extension
  point for future API-backed admin features.
*/
window.RouteCrewAdminSchema={version:2,supports:['licenceNumber','homeLocation','vehicleOwnership','shifts','engagements','consent','referralCode']};
