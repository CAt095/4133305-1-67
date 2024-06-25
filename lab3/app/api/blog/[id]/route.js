export function GET(request, { params }) {
  return Response.json({
    name: "Patiphat",
    major: "IT",
    lv: "3",
    id: params.id,
  });
}
