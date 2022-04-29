import styled from 'styled-components';
import { ArrowDownOutline } from '@styled-icons/evaicons-outline/ArrowDownOutline';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';
import { User } from '@styled-icons/boxicons-regular/User';

export const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #2e3057;
    font-size: 34px;
    font-weight: 700;
    padding: 0 5%;
    grid-area: Nav;
    position: fixed;
    top: 0;
    z-index: 2;
    transition-duration: 0.15s;
    background-color: ${({ navbar }) => (navbar ? '#ebebeba3' : 'transparent')};
    backdrop-filter: ${({ navbar }) => (navbar ? 'blur(20px) saturate(200%)' : null)};
`;

export const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 400;
    padding: 5px;
    position: relative;
    cursor: pointer;
`;

export const ProfilePicture = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 10px;
    transition-duration: 0.2s;
`;

export const StyledArrowDownOutline = styled(ArrowDownOutline)`
    width: 20px;
    height: 20px;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : null)};
    transition-duration: 0.2s;
`;

export const LogIn = styled.button`
    padding: 7px;
    cursor: pointer;
    background: none;
    border: 2px solid #2e3057;
    border-radius: 10px;
`;

export const Dropdown = styled.div`
    position: absolute;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    top: 60px;
    right: 0;
    z-index: 2;

    div {
        background-color: #ebf3f5;
        display: flex;
        flex: 1;
        padding: 10px;
        align-items: center;
        gap: 10px;
        white-space: nowrap;
        margin-bottom: 2px;
        &:first-child {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        &:last-child {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            margin-bottom: 0px;
        }
    }
`;

export const StyledLogOut = styled(LogOut)`
    width: 20px;
    height: 20px;
`;

export const StyledUser = styled(User)`
    width: 20px;
    height: 20px;
`;
