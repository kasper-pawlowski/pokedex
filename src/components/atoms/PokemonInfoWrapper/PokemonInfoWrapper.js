import styled from 'styled-components';

export const InfoWrapper = styled.div`
    background-color: #ebf3f5;
    border-radius: 10px;
    width: ${({ evolutionChain }) => (evolutionChain ? '800px' : '100%')};
    height: fit-content;
    margin-top: ${({ evolutionChain }) => (evolutionChain ? '30px' : null)};
`;

export const Description = styled.div`
    width: 100%;
    padding: 12px 20px;
    border-bottom: 3px solid #f7f8fa;
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const Icon = styled.span`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DescriptionName = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

export const Content = styled.div`
    padding: 20px 20px;
    display: flex;
    justify-content: center;
`;
