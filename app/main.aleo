program cookieclicker.aleo;

interface GameInfo:
    cookies as i128;
    level as i128;
    is_levelup as boolean;

interface Command:
    id_type as u8;


function init:
    cast 0i128 1i128 false into r0 as GameInfo;
    output r0 as GameInfo.private;

function main:
    input r0 as Command.private;
    input r1 as GameInfo.private;
    is.eq r0.id_type 1u8 into r2;
    add r1.cookies 1i128 into r3;
    mul r1.level 2i128 into r4;
    gte r1.cookies r4 into r5;
    cast r3 r1.level r5 into r6 as GameInfo;
    is.eq r0.id_type 2u8 into r7;
    mul r1.level 2i128 into r8;
    sub r1.cookies r8 into r9;
    add r1.level 1i128 into r10;
    mul r1.level 2i128 into r11;
    sub r1.cookies r11 into r12;
    mul r1.level 2i128 into r13;
    gte r12 r13 into r14;
    cast r9 r10 r14 into r15 as GameInfo;
    cast r1.cookies r1.level r1.is_levelup into r16 as GameInfo;
    ternary r7 r15.cookies r16.cookies into r17;
    ternary r7 r15.level r16.level into r18;
    ternary r7 r15.is_levelup r16.is_levelup into r19;
    cast r17 r18 r19 into r20 as GameInfo;
    ternary r2 r6.cookies r20.cookies into r21;
    ternary r2 r6.level r20.level into r22;
    ternary r2 r6.is_levelup r20.is_levelup into r23;
    cast r21 r22 r23 into r24 as GameInfo;
    output r24 as GameInfo.private;

