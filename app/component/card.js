// import React from 'react'
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Avatar,
// } from '@nextui-org/react'

// export default function UserCard(user) {
//   return (
//     <Card className="max-w-[340px]">
//       <CardHeader className="justify-between">
//         <div className="flex gap-5">
//           <Avatar
//             isBordered
//             radius="full"
//             size="md"
//             src="/avatars/avatar-1.png"
//           />
//           <div className="flex flex-col gap-1 items-start justify-center">
//             <h4 className="text-small font-semibold leading-none text-default-600">
//               {user.name}
//             </h4>
//             <h5 className="text-small tracking-tight text-default-400">
//               {user.email}
//             </h5>
//           </div>
//         </div>
//       </CardHeader>
//       <CardBody className="px-3 py-0 text-small text-default-400">
//         <p>id: {user.id}</p>
//         <p>orders: {user.orders}</p>
//         <span className="pt-2">
//           role:{user.role}
//           <span className="py-2" aria-label="computer" role="img">
//             💻
//           </span>
//         </span>
//       </CardBody>
//       <CardFooter className="gap-3">
//         <div className="flex gap-1">
//           <p className="font-semibold text-default-400 text-small">
//             created at:
//           </p>
//           <p className=" text-default-400 text-small">{user.createdAt}</p>
//         </div>
//         <div className="flex gap-1">
//           <p className="font-semibold text-default-400 text-small">
//             {' '}
//             updated at:{' '}
//           </p>
//           <p className="text-default-400 text-small">{user.updatedAt}</p>
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }
