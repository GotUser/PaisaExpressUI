export function ReturnRoleModuleId(Role, RoleModule) {

    console.log(" In  ReturnRoleModuleId In Separte Folder In The Structure ");
    console.log(Role);
    console.log(RoleModule);
    let RoleId;
    Object.keys(RoleModule).map((item, i) =>
        // {
        //     console.log(" RoleModule RoleModule RoleModule ITEm IS : ");
        //     console.log(item);
        //     console.log(RoleModule[item]);
        // }

        RoleModule[item] === Role ? RoleId = item : null
    )
    return RoleId;

}