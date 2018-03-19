let scuttlekit: any;

export async function init() {
  // Check if registered.
  // If not, call registration.
  // Else init scuttlekit.
  scuttlekit = 1; //new ScuttleKit(token);
}

export function sdk() : any {
  return scuttlekit;
}